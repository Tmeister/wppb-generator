import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-a:text-wppblue-500 prose-a:decoration-wppblue-500 dark:prose-invert',
      )}
      {...props}
    />
  )
}
