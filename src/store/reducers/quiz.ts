import { AnyAction } from 'redux';
import { QuizAction } from '../actions';
import { QuizDefaults } from './defaults';

/**
 * Redux Actions Reducer.
 *
 * @param {any} store current store partition state.
 * @param {AnyAction} action action dispatched.
 *
 * @returns {any} new store partition.
 */
export default function QuizReducer(store: any = QuizDefaults, action: AnyAction ) : any
{
    // action destructuring. (key, type or payload).
    const { type, payload } = action;

    switch (type)
    {
        case QuizAction.Type.START:
        {
            const { deck: { id, title, questions } } = payload;

            return {
                deckId: id,
                title,
                score: 0,
                success: false,
                date: new Date(),
                total: Object.keys(questions).length,
                answered: 0,
                correct: 0,
                questions: {
                    ...questions
                }
            };
        }

        case QuizAction.Type.ANSWER:
        {
            const { id, correct } = payload;

            let { questions } = store;

            delete questions[id];

            const answered = store.answered + 1;
            const success = answered === store.total;
            questions = success ? {} : questions;

            return {
                ...store,
                score: correct ? store.score + 1 : store.score,
                answered,
                success,
                questions: {
                    ...questions
                }
            };
        }

        // default doesn't changes the store,
        // so, components doesn't re-renders.
        default:
            return store;
    }
}
