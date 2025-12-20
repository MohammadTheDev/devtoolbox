import { Module } from "@nestjs/common";
import { PrismaModule } from "./common/database/prisma/prisma.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
})
export class AppModule {}
