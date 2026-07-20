import React from 'react';
import AccountingPageTemplate from '../components/accounting/AccountingPageTemplate';
import { accountingConfigs } from '../components/accounting/accountingConfigs';

export default function AccountingAgro() {
  return <AccountingPageTemplate config={accountingConfigs.agro} />;
}