import { NextResponse } from 'next/server';

import { leadRows } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({
    leads: leadRows,
    message: 'API ready for business lead intake and AI automation.'
  });
}
