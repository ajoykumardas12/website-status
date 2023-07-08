import { dependency } from '@/app/services/taskDetailsApi';
import { ChangeEvent, ChangeEventHandler } from 'react';
export type taskDetailsDataType = {
    message?: string;
    taskData?: {
        assignee: string;
        completionAward: { dinero: number; neelam: number };
        createdBy: string;
        endsOn: number;
        isNoteworthy: boolean;
        dependsOn: string[];
        lossRate: { dinero: number; neelam: number };
        percentCompleted: number;
        priority: string;
        startedOn: number;
        status: string;
        title: string;
        type: string;
    };
};

export type ButtonProps = {
    buttonName: string;
    clickHandler: (value: any) => void;
    value?: boolean;
};
export type TextAreaProps = {
    name: string;
    value: string;
    onChange: ChangeEventHandler;
};

export type Props = {
    loading: boolean;
    fetching: boolean;
    error: boolean;
    dependencyData: dependency | undefined;
    navigateToTask: (taskId: string) => void;
    isEditing?: boolean;
    updatedDependencies: string[];
    handleChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};
export type Props1 = {
    loading: boolean;
    fetching: boolean;
    error: boolean;
    dependencyData: dependency | undefined;
    navigateToTask: (taskId: string) => void;
};
