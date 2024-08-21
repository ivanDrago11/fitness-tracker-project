import { z } from 'zod';
import { ActivityType, activityTypes } from './activityCategories';

//Helper function to get the date one week ago
const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

// Helper type for activity subtypes
const allActivities = Object.values(activityTypes).flat() as Array<string>;

////////////////////////////////////////////////////
// Base form data schema
////////////////////////////////////////////////////
export const BaseFormDataSchema = z.object({
    activityType: z.custom<ActivityType>(
        (val) => allActivities.includes(val as string),
        {
            message: 'Invalid activity type',
        },
    ),
    date: z
        .date()
        .refine((date) => date >= oneWeekAgo, {
            message:
                'Date cannot be set more than a week before the current date',
        })
        .refine((date) => date <= new Date(), {
            message: 'Date cannot be set in the future',
        }),
    duration: z
        .object({
            hours: z
                .number()
                .int()
                .min(0, { message: 'Hours must be a non-negative integer' }),
            minutes: z
                .number()
                .int()
                .min(0, { message: 'Minutes must be between 0 and 59' })
                .max(59, { message: 'Minutes must be between 0 and 59' }),
            seconds: z
                .number()
                .int()
                .min(0, { message: 'Seconds must be between 0 and 59' })
                .max(59, { message: 'Seconds must be between 0 and 59' }),
        })
        .refine(
            ({ hours, minutes, seconds }) =>
                hours > 0 || minutes > 0 || seconds > 0,
            { message: 'Duration must be greater than zero' },
        ),
    notes: z
        .string()
        .max(500, { message: 'Notes cannot exceed 500 characters' }),
});
export type BaseFormData = z.infer<typeof BaseFormDataSchema>;

////////////////////////////////////////////////////
// Cardio form data schema
////////////////////////////////////////////////////
export const CardioFormDataSchema = BaseFormDataSchema.extend({
    specificActivity: z
        .string()
        .min(1, { message: 'Specific activity is required' }),
    distance: z
        .number()
        .min(0, { message: 'Distance must be a non-negative number' }),
    averageSpeed: z
        .number()
        .min(0, { message: 'Average speed must be a non-negative number' }),
    caloriesBurned: z
        .number()
        .min(0, { message: 'Calories burned must be a non-negative number' }),
    averageHeartRate: z.number().min(0, {
        message: 'Average heart rate must be a non-negative number',
    }),
    intensityLevel: z.enum(['low', 'medium', 'high'], {
        invalid_type_error: 'Invalid intensity level',
    }),
});
export type CardioFormData = z.infer<typeof CardioFormDataSchema>;

////////////////////////////////////////////////////
// Strength form data schema
////////////////////////////////////////////////////
export const StrengthFormDataSchema = BaseFormDataSchema.extend({
    specificExercise: z
        .string()
        .min(1, { message: 'Specific exercise is required' }),
    sets: z
        .number()
        .int()
        .min(1, { message: 'Sets must be a positive integer' }),
    repetitions: z
        .number()
        .int()
        .min(1, { message: 'Repetitions must be a positive integer' }),
    weightUsed: z
        .number()
        .min(0, { message: 'Weight used must be a non-negative number' }),
    restTime: z
        .number()
        .min(0, { message: 'Rest time must be a non-negative number' }),
    muscleGroup: z.string().min(1, { message: 'Muscle group is required' }),
});
export type StrengthFormData = z.infer<typeof StrengthFormDataSchema>;

////////////////////////////////////////////////////
// Flexibility form data schema
////////////////////////////////////////////////////
export const FlexibilityFormDataSchema = BaseFormDataSchema.extend({
    specificStretch: z
        .string()
        .min(1, { message: 'Specific stretch is required' }),
    holdTime: z
        .number()
        .min(0, { message: 'Hold time must be a non-negative number' }),
    repetitions: z
        .number()
        .int()
        .min(1, { message: 'Repetitions must be a positive integer' }),
    targetMuscleGroup: z
        .string()
        .min(1, { message: 'Target muscle group is required' }),
    difficultyLevel: z.enum(['beginner', 'intermediate', 'advanced'], {
        invalid_type_error: 'Invalid difficulty level',
    }),
});
export type FlexibilityFormData = z.infer<typeof FlexibilityFormDataSchema>;

////////////////////////////////////////////////////
// Sports form data schema
////////////////////////////////////////////////////
export const SportsFormDataSchema = BaseFormDataSchema.extend({
    sportName: z.string().min(1, { message: 'Sport name is required' }),
    position: z.string().min(1, { message: 'Position is required' }),
    teamOrIndividual: z.enum(['team', 'individual'], {
        invalid_type_error: 'Invalid team or individual selection',
    }),
    scoreOrPerformance: z
        .string()
        .min(1, { message: 'Score or performance is required' }),
    competitionLevel: z.enum(['casual', 'amateur', 'professional'], {
        invalid_type_error: 'Invalid competition level',
    }),
});
export type SportsFormData = z.infer<typeof SportsFormDataSchema>;

////////////////////////////////////////////////////
// HIIT form data schema
////////////////////////////////////////////////////
export const HIITFormDataSchema = BaseFormDataSchema.extend({
    circuitName: z.string().min(1, { message: 'Circuit name is required' }),
    numberOfExercises: z
        .number()
        .int()
        .min(1, { message: 'Number of exercises must be a positive integer' }),
    workInterval: z
        .number()
        .min(0, { message: 'Work interval must be a non-negative number' }),
});
export type HIITFormData = z.infer<typeof HIITFormDataSchema>;
