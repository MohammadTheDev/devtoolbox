import { Module } from "@nestjs/common";
import { PrismaModule } from "./common/database/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
