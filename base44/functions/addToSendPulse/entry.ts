import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        
        const { 
            email, 
            price, 
            orderid, 
            paymentid, 
            products, 
            requestid, 
            formname, 
            formid, 
            referer 
        } = await req.json();
        
        if (!email) {
            return Response.json({ error: 'Email is required' }, { status: 400 });
        }

        const apiId = Deno.env.get("SENDPULSE_API_ID");
        const secret = Deno.env.get("SENDPULSE_SECRET");
        const bookId = Deno.env.get("SENDPULSE_BOOK_ID");

        // Get access token from SendPulse
        const tokenResponse = await fetch('https://api.sendpulse.com/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                client_id: apiId,
                client_secret: secret,
            }),
        });

        if (!tokenResponse.ok) {
            throw new Error('Failed to get SendPulse token');
        }

        const { access_token } = await tokenResponse.json();

        // Add email to address book with custom fields
        const addEmailResponse = await fetch(`https://api.sendpulse.com/addressbooks/${bookId}/emails`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emails: [
                    {
                        email: email,
                        variables: {
                            price: price || '',
                            orderid: orderid || '',
                            paymentid: paymentid || '',
                            products: products || '',
                            requestid: requestid || '',
                            formname: formname || 'Cart',
                            formid: formid || '',
                            referer: referer || '',
                        },
                    },
                ],
            }),
        });

        const result = await addEmailResponse.json();

        console.log('SendPulse API Response:', JSON.stringify(result, null, 2));
        console.log('SendPulse Response Status:', addEmailResponse.status);

        if (!addEmailResponse.ok) {
            console.error('SendPulse Error Details:', result);
            return Response.json({ 
                success: false,
                error: 'Failed to add email to SendPulse',
                details: result,
                statusCode: addEmailResponse.status
            }, { status: 500 });
        }

        return Response.json({ 
            success: true, 
            message: 'Contact added to SendPulse',
            result 
        });

    } catch (error) {
        console.error('Error adding to SendPulse:', error);
        console.error('Error stack:', error.stack);
        return Response.json({ 
            error: error.message,
            stack: error.stack,
            success: false 
        }, { status: 500 });
    }
});