"use client";

import { FinancialModal } from "../shared/FinancialModal";
import { Income, Category } from "../../types/financial";
import { AccountInterface } from "../../types/accounts";

interface EditIncomeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEdit: (id: number, income: Partial<Omit<Income, 'id' | 'createdAt' | 'updatedAt'>>) => void;
    categories: Category[];
    accounts: AccountInterface[];
    income: Income | null;
}

export function EditIncomeModal({ isOpen, onClose, onEdit, categories, accounts, income }: EditIncomeModalProps) {
    const handleSubmit = (data: any) => {
        if (income) {
            onEdit(income.id, data.data);
        }
    };

    return (
        <FinancialModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            categories={categories}
            accounts={accounts}
            transactionType="INCOME"
            transaction={income}
            mode="edit"
        />
    );
} 