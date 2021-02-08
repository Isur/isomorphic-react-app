export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  validation?: {
    [key: string]: unknown,
  },
}
