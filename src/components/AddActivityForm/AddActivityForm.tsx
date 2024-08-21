import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './AddActivityGoalForm.module.scss';

interface AddActivityGoalFormProps {
    isGoalOrActivity: 'goal' | 'activity';
}

const AddActivityGoalForm: React.FC<AddActivityGoalFormProps> = ({
    isGoalOrActivity,
}) => {
    const [activityType, setActivityType] = useState<ActivityType>('cardio');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    console.log(isGoalOrActivity);
    console.log(errors);

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const onSubmitHandler: SubmitHandler<FormData> = (data) => {
        onSubmit(data);
    };

    const renderActivitySpecificFields = () => {
        switch (activityType) {
            case 'cardio':
                return (
                    <>
                        <input
                            {...register('specificActivity', {
                                required: 'Specific activity is required',
                            })}
                            placeholder="Specific Activity (e.g., Running)"
                        />
                        <input
                            type="number"
                            {...register('distance', {
                                required: 'Distance is required',
                            })}
                            placeholder="Distance (km)"
                        />
                        {/* Add other cardio-specific fields */}
                    </>
                );
            case 'strength':
                return (
                    <>
                        <input
                            {...register('specificExercise', {
                                required: 'Specific exercise is required',
                            })}
                            placeholder="Specific Exercise (e.g., Bench Press)"
                        />
                        <input
                            type="number"
                            {...register('sets', {
                                required: 'Sets are required',
                            })}
                            placeholder="Number of Sets"
                        />
                        {/* Add other strength-specific fields */}
                    </>
                );
            // Add cases for other activity types
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
            <select
                {...register('activityType')}
                onChange={(e) =>
                    setActivityType(e.target.value as ActivityType)
                }
                className={styles.select}
            >
                <option value="cardio">Cardio</option>
                <option value="strength">Strength Training</option>
                <option value="flexibility">Flexibility and Mobility</option>
                <option value="sports">Sports and Recreation</option>
                <option value="hiit">HIIT</option>
            </select>

            <input
                type="date"
                {...register('date', { required: 'Date is required' })}
            />
            <input
                type="time"
                {...register('time', { required: 'Time is required' })}
            />
            <input
                type="number"
                {...register('duration', { required: 'Duration is required' })}
                placeholder="Duration (minutes)"
            />

            {renderActivitySpecificFields()}

            <textarea {...register('notes')} placeholder="Notes/Comments" />

            {/* Add error messages for each field */}

            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Add
                </button>
                <button
                    type="button"
                    onClick={() => {}}
                    className={styles.cancelButton}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddActivityGoalForm;
