import { NextResponse } from 'next/server';

import { dashboardMetrics, leadRows, businessOverview, chatMessages } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({
    business: businessOverview,
    metrics: dashboardMetrics,
    leads: leadRows,
    messages: chatMessages
  });
}
