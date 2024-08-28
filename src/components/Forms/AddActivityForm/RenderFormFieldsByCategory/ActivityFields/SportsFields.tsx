import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface SportsFieldsProps {
    register: UseFormRegister<FieldValues>;
}

const SportsFields: React.FC<SportsFieldsProps> = ({ register }) => {
    return (
        <>
            <div>
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    type="text"
                    {...register('position', {
                        required: 'Position is required',
                        minLength: {
                            value: 1,
                            message: 'Position is required',
                        },
                    })}
                    placeholder="Position"
                />
            </div>
            <div>
                <label htmlFor="teamOrIndividual">Team or Individual</label>
                <select
                    id="teamOrIndividual"
                    {...register('teamOrIndividual', {
                        required: 'Team or Individual selection is required',
                    })}
                >
                    <option value="">Select Team or Individual</option>
                    <option value="team">Team</option>
                    <option value="individual">Individual</option>
                </select>
            </div>
            <div>
                <label htmlFor="scoreOrPerformance">Score or Performance</label>
                <input
                    id="scoreOrPerformance"
                    type="text"
                    {...register('scoreOrPerformance', {
                        required: 'Score or performance is required',
                        minLength: {
                            value: 1,
                            message: 'Score or performance is required',
                        },
                    })}
                    placeholder="Score or Performance"
                />
            </div>
            <div>
                <label htmlFor="competitionLevel">Competition Level</label>
                <select
                    id="competitionLevel"
                    {...register('competitionLevel', {
                        required: 'Competition level is required',
                    })}
                >
                    <option value="">Select Competition Level</option>
                    <option value="casual">Casual</option>
                    <option value="amateur">Amateur</option>
                    <option value="professional">Professional</option>
                </select>
            </div>
        </>
    );
};

export default SportsFields;
