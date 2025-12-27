import { Module } from "@nestjs/common";
import { PrismaModule } from "./common/database/prisma/prisma.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  controllers: [HealthController],
})
export class AppModule {}
