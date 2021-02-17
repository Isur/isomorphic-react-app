export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string,
  validation?: {
    [key: string]: unknown,
  },
}
