import { z } from "zod";

// 문의 폼 검증 스키마
export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요."),
  email: z.email("올바른 이메일 형식이 아닙니다."),
  message: z.string().min(10, "메시지는 10자 이상 입력해주세요."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
