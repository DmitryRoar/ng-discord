import {NestFactory} from '@nestjs/core'
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'

import session from '@fastify/secure-session'

import {AppModule} from './app.module'

import {configService} from './config/config.service'

async function bootstrap() {
  const {FASTIFY_SESSION_SECRET, API_VERSION} = configService.getValues([
    'FASTIFY_SESSION_SECRET',
    'API_VERSION',
  ])
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({logger: {level: 'silent'}})
  )
  app.setGlobalPrefix(`api/v${API_VERSION}`)
  app.register(session, {
    secret: FASTIFY_SESSION_SECRET,
    salt: 'mq9hDxBVDbspDR6n',
  })
  await app.listen(3000)
}

bootstrap()
