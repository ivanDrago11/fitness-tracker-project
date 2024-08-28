import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FlexibilityFieldsProps {
    register: UseFormRegister<FieldValues>;
}

const FlexibilityFields: React.FC<FlexibilityFieldsProps> = ({ register }) => {
    return (
        <>
            <div>
                <label htmlFor="holdTime">Hold Time</label>
                <input
                    id="holdTime"
                    type="number"
                    min="0"
                    {...register('holdTime', {
                        required: 'Hold time is required',
                        min: {
                            value: 0,
                            message: 'Hold time must be a non-negative number',
                        },
                    })}
                    placeholder="Hold Time (seconds)"
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
                <label htmlFor="targetMuscleGroup">Target Muscle Group</label>
                <select
                    id="targetMuscleGroup"
                    {...register('targetMuscleGroup', {
                        required: 'Target muscle group is required',
                        minLength: {
                            value: 1,
                            message: 'Target muscle group is required',
                        },
                    })}
                >
                    <option value="">Select Target Muscle Group</option>
                    <option value="Full Body">Full Body</option>
                    <option value="Legs">Legs</option>
                    <option value="Back">Back</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Chest">Chest</option>
                    <option value="Abs">Abs</option>
                </select>
            </div>
            <div>
                <label htmlFor="difficultyLevel">Difficulty Level</label>
                <select
                    id="difficultyLevel"
                    {...register('difficultyLevel', {
                        required: 'Difficulty level is required',
                    })}
                >
                    <option value="">Select Difficulty Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
        </>
    );
};

export default FlexibilityFields;
