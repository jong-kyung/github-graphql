import { z } from 'zod/v4-mini'

export const formSchema = z.object({
  query: z
    .string()
    .check(z.minLength(2, { error: '두 글자 이상 입력해주세요.' })),
})
