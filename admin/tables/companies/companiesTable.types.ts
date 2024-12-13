export interface ICompany {
	companyName: string;
	city: string;
	plan: string;
	restaurants: number;
}

export interface ICompaniesTableProps {
	companies: ICompany[];
}
