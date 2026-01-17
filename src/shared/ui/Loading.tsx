const Loading = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]">
        <span className="absolute! -m-px! h-px! w-px! overflow-hidden! border-0! p-0! whitespace-nowrap!">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Loading
