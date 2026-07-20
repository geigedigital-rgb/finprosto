import React from 'react';
import CRMNichePage from '../components/crm/CRMNichePage';
import { NICHES } from '../components/crm/nicheData';

export default function CRMManufacturingPage() {
  return <CRMNichePage niche={NICHES.CRMManufacturing} />;
}