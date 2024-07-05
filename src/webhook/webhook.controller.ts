import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('webhook')
export class WebhookController {
  private readonly VERIFY_TOKEN = '12345'; // Reemplaza con tu propio token

  @Get()
  verifyWebhook(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') verifyToken: string,
    @Query('hub.challenge') challenge: string,
    @Res() res: Response,
  ) {
    console.log('hub.mode', mode);

    if (mode === 'subscribe' && verifyToken === this.VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
}
