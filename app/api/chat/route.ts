import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { leadRows } from '@/lib/mockData';

const messageSchema = z.object({
  message: z.string().min(1).max(500),
  language: z.string().default('fr')
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = messageSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const { message, language } = parsed.data;

  const normalized = message.toLowerCase();
  const isBooking = normalized.includes('réserver') || normalized.includes('book') || normalized.includes('rendez-vous');
  const isPrice = normalized.includes('prix') || normalized.includes('devis') || normalized.includes('price');

  let response = 'Merci pour votre message. Notre équipe va vous répondre rapidement.';

  if (isBooking) {
    response = 'Très bien, je peux vous aider à réserver. Merci de nous donner votre nom, votre téléphone et la date souhaitée.';
  } else if (isPrice) {
    response = 'Bien sûr. Je peux vous préparer un devis. Envoyez-nous votre besoin et nous vous répondrons rapidement.';
  }

  const generatedLead = {
    id: `AI-${Date.now()}`,
    name: 'New lead',
    source: 'AI chat',
    status: isBooking ? 'Qualified' : 'New',
    value: isPrice ? 1200 : 450,
    channel: language === 'ar' ? 'دردشة' : 'Chat'
  };

  return NextResponse.json({
    reply: response,
    lead: generatedLead,
    leads: leadRows.slice(0, 3),
    language
  });
}
