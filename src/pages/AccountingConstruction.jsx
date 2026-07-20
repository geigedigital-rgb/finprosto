import React from 'react';
import AccountingPageTemplate from '../components/accounting/AccountingPageTemplate';
import { accountingConfigs } from '../components/accounting/accountingConfigs';

export default function AccountingConstruction() {
  return <AccountingPageTemplate config={accountingConfigs.construction} />;
}