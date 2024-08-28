import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface CardioFieldsProps {
    register: UseFormRegister<FieldValues>;
}

const CardioFields: React.FC<CardioFieldsProps> = ({ register }) => {
    return (
        <>
            <div>
                <label htmlFor="distance">Distance(km)</label>
                <input
                    id="distance"
                    type="number"
                    min="0"
                    {...register('distance', {
                        required: 'Distance is required',
                        min: {
                            value: 0,
                            message: 'Distance must be a non-negative number',
                        },
                    })}
                    placeholder="Distance"
                />
            </div>
            <div>
                <label htmlFor="averagePace">Average Pace (min/km)</label>
                <input
                    id="averagePace"
                    type="number"
                    step="0.10"
                    min="0"
                    {...register('averageSpeed', {
                        required: 'Average speed is required',
                        min: {
                            value: 0,
                            message:
                                'Average speed must be a non-negative number',
                        },
                    })}
                    placeholder="Average Pace (min/km)"
                />
            </div>
            <div>
                <label htmlFor="caloriesBurned">Calories Burned (kcal)</label>
                <input
                    id="caloriesBurned"
                    type="number"
                    min="0"
                    {...register('caloriesBurned', {
                        required: 'Calories burned is required',
                        min: {
                            value: 0,
                            message:
                                'Calories burned must be a non-negative number',
                        },
                    })}
                    placeholder="Calories Burned"
                />
            </div>
            <div>
                <label htmlFor="averageHeartRate">Average Heart Rate</label>
                <input
                    id="averageHeartRate"
                    type="number"
                    min="0"
                    {...register('averageHeartRate', {
                        required: 'Average heart rate is required',
                        min: {
                            value: 0,
                            message:
                                'Average heart rate must be a non-negative number',
                        },
                    })}
                    placeholder="Average Heart Rate (bpm)"
                />
            </div>
            <div>
                <label htmlFor="intensityLevel">Intensity Level</label>
                <select
                    id="intensityLevel"
                    {...register('intensityLevel', {
                        required: 'Intensity level is required',
                    })}
                >
                    <option value="">Select Intensity Level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </>
    );
};

export default CardioFields;
