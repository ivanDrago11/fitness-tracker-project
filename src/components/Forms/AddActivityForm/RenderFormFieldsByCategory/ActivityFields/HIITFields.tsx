import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface HIITFieldsProps {
    register: UseFormRegister<FieldValues>;
}

const HIITFields: React.FC<HIITFieldsProps> = ({ register }) => {
    return (
        <>
            <div>
                <label htmlFor="circuitName">Circuit Name</label>
                <input
                    id="circuitName"
                    type="text"
                    {...register('circuitName', {
                        required: 'Circuit name is required',
                        minLength: {
                            value: 1,
                            message: 'Circuit name is required',
                        },
                    })}
                    placeholder="Circuit Name"
                />
            </div>
            <div>
                <label htmlFor="numberOfExercises">Number of Exercises</label>
                <input
                    id="numberOfExercises"
                    type="number"
                    min="0"
                    {...register('numberOfExercises', {
                        required: 'Number of exercises is required',
                        min: {
                            value: 1,
                            message:
                                'Number of exercises must be a positive integer',
                        },
                    })}
                    placeholder="Number of Exercises"
                />
            </div>
            <div>
                <label htmlFor="workInterval">Work Interval</label>
                <input
                    id="workInterval"
                    type="number"
                    min="0"
                    {...register('workInterval', {
                        required: 'Work interval is required',
                        min: {
                            value: 0,
                            message:
                                'Work interval must be a non-negative number',
                        },
                    })}
                    placeholder="Work Interval (seconds)"
                />
            </div>
        </>
    );
};

export default HIITFields;
