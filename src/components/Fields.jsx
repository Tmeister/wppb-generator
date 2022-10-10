const fieldClasses =
  'block w-full appearance-none rounded-md border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-blue-400 sm:text-sm bg-slate-50'

const alternativeClasses =
  'block w-full appearance-none rounded-none rounded-r-md border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-blue-400 sm:text-sm bg-slate-50'

function Label({ id, children }) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-500">
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
      {error && !alternative && <span className="mt-2 inline-block text-xs text-red-600">{error.message}</span>}
    </div>
  )
}
