import React from 'react';
import {
    UseFormRegister,
    FieldValues,
    Controller,
    Control,
} from 'react-hook-form';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface BaseFieldsProps {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues>;
    children?: React.ReactNode;
}

//TODO: Fix the padding of the time picker

const BaseFields: React.FC<BaseFieldsProps> = ({
    register,
    control,
    children,
}) => {
    return (
        <>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    {...register('date', {
                        required: 'Date is required',
                        validate: {
                            notInFuture: (value) =>
                                new Date(value) <= new Date() ||
                                'Date cannot be set in the future',
                            notTooOld: (value) =>
                                new Date(value) >=
                                    new Date(
                                        Date.now() - 7 * 24 * 60 * 60 * 1000,
                                    ) ||
                                'Date cannot be set more than a week before the current date',
                        },
                    })}
                />
            </div>
            <div>
                <label htmlFor="duration">Duration (HH:mm:ss)</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Controller
                        name="duration"
                        control={control}
                        defaultValue={dayjs().startOf('day')}
                        render={({ field }) => (
                            <TimePicker
                                sx={{
                                    width: '100%',
                                    border: '1px solid #00000090',
                                    borderRadius: '5px',
                                }}
                                views={['hours', 'minutes', 'seconds']}
                                format="HH:mm:ss"
                                ampm={false}
                                {...field}
                                onChange={(newValue) => {
                                    field.onChange(newValue);
                                    if (newValue) {
                                        register('duration.hours').onChange({
                                            target: {
                                                value: newValue.hour(),
                                            },
                                        });
                                        register('duration.minutes').onChange({
                                            target: {
                                                value: newValue.minute(),
                                            },
                                        });
                                        register('duration.seconds').onChange({
                                            target: {
                                                value: newValue.second(),
                                            },
                                        });
                                    }
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>
            </div>
            {/* RENDER THE CHILD COMPONENTS */}
            {children}
            {/* RENDER THE CHILD COMPONENTS */}
            <div>
                <label htmlFor="notes">Notes</label>
                <textarea
                    id="notes"
                    {...register('notes', {
                        maxLength: {
                            value: 500,
                            message: 'Notes cannot exceed 500 characters',
                        },
                    })}
                    placeholder="Notes (optional, max 500 characters)"
                />
            </div>
        </>
    );
};

export default BaseFields;
