export interface SignInInput {
	phone: string;
	password: string;
}

export interface SignInFormProps {
	onSubmit?: (data: SignInInput) => void;
}
