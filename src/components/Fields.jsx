const fieldClasses =
  'block w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10'

const alternativeClasses =
  'block w-full appearance-none rounded-none rounded-r-md min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-medium text-gray-500"
    >
      {children}
    </label>
  )
}

export function TextField({
  error,
  label,
  id,
  register,
  name,
  alternative,
  placeholder,
  callback,
  defaultValue,
  className,
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        placeholder={placeholder}
        className={!alternative ? fieldClasses : alternativeClasses}
        id={id}
        defaultValue={defaultValue}
        {...register(name, { onChange: (e) => callback(name, e) })}
        {...props}
      />
      {error && !alternative && (
        <span className="mt-2 inline-block text-xs text-red-600">
          {error.message}
        </span>
      )}
    </div>
  )
}
