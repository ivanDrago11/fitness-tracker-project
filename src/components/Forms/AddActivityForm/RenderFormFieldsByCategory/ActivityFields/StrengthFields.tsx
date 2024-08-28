import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface StrengthFieldsProps {
    register: UseFormRegister<FieldValues>;
}

const StrengthFields: React.FC<StrengthFieldsProps> = ({ register }) => {
    return (
        <>
            <div>
                <label htmlFor="sets">Sets</label>
                <input
                    id="sets"
                    type="number"
                    min="0"
                    {...register('sets', {
                        required: 'Sets are required',
                        min: {
                            value: 1,
                            message: 'Sets must be a positive integer',
                        },
                    })}
                    placeholder="Number of Sets"
                />
            </div>
            <div>
                <label htmlFor="repetitions">Repetitions</label>
                <input
                    id="repetitions"
                    type="number"
                    min="0"
                    {...register('repetitions', {
                        required: 'Repetitions are required',
                        min: {
                            value: 1,
                            message: 'Repetitions must be a positive integer',
                        },
                    })}
                    placeholder="Number of Repetitions"
                />
            </div>
            <div>
                <label htmlFor="weightUsed">Weight Used</label>
                <input
                    id="weightUsed"
                    type="number"
                    min="0"
                    {...register('weightUsed', {
                        required: 'Weight used is required',
                        min: {
                            value: 0,
                            message:
                                'Weight used must be a non-negative number',
                        },
                    })}
                    placeholder="Weight Used (kg)"
                />
            </div>
            <div>
                <label htmlFor="restTime">Rest Time (seconds)</label>
                <input
                    id="restTime"
                    type="number"
                    min="0"
                    {...register('restTime', {
                        required: 'Rest time is required',
                        min: {
                            value: 0,
                            message: 'Rest time must be a non-negative number',
                        },
                    })}
                    placeholder="Rest Time (seconds)"
                />
            </div>
            <div>
                <label htmlFor="muscleGroup">Muscle Group</label>
                <select
                    id="muscleGroup"
                    {...register('muscleGroup', {
                        required: 'Muscle group is required',
                        minLength: {
                            value: 1,
                            message: 'Muscle group is required',
                        },
                    })}
                >
                    <option value="">Select Muscle Group</option>
                    <option value="Chest">Chest</option>
                    <option value="Back">Back</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Legs">Legs</option>
                    <option value="Abs">Abs</option>
                    <option value="Arms">Arms</option>
                    <option value="Full Body">Full Body</option>
                </select>
            </div>
        </>
    );
};

export default StrengthFields;
