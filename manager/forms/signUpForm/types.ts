// Типы для полей формы
export interface FormFields {
	phone: string;
	email: string;
	firstname: string;
	lastname: string;
	surname?: string;
	password: string;
	confirmPassword: string;
	companyName: string;
	inn: string;
	address: string;
}

// Типы для пропсов компонента
export interface SignUpFormProps {
	onSubmit?: (fields: FormFields) => void;
}

// Типы для состояния валидации полей
export interface FieldValidation {
	valid: boolean;
	errors: string[];
	value: string;
}

// Типы для состояния формы
export interface FormState {
	phone: FieldValidation;
	email: FieldValidation;
	password: FieldValidation;
	name: FieldValidation;
	inn: FieldValidation;
	address: FieldValidation;
	valid: boolean;
}

// Типы для масок ввода
export interface InputMask {
	phone: {
		mask: string;
		eager: boolean;
	};
	inn: {
		mask: string;
	};
}

// Константы для валидации
export const VALIDATION_PATTERNS = {
	phone: /^7\d{10}$/,
	email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	inn: /^\d{10}$|^\d{12}$/
} as const;

// Типы ошибок валидации
export type ValidationErrorType = 'pattern' | 'required' | 'passwordLength' | 'innFormat';
