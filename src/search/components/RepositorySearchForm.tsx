import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { z } from 'zod/v4-mini'
import { useRepositorySearchContext } from '@/search/model/RepositorySearchContext'

const formSchema = z.object({
  query: z.string(),
})

const RepositorySearchForm = () => {
  const { handleSearch } = useRepositorySearchContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    handleSearch(values.query)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-full max-w-sm items-center space-x-2">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="검색어를 입력하세요" {...field} />
              </FormControl>
              <FormMessage className="absolute bottom-0 translate-y-full" />
            </FormItem>
          )}
        />
        <Button type="submit">검색</Button>
      </form>
    </Form>
  )
}

export default RepositorySearchForm
