export const EVENTS = {
    GAME_OVER: 'game_over',
    GAME_ENDED: 'game_ended',
    GAME_STARTED: 'play_started',
    ANSWER_CORRECT: 'answer_correct',
    ANSWER_INCORRECT: 'answer_incorrect',

    CLICK_SHARE: 'click_share',
    CLICK_EXIT: 'click_exit',
    CLICK_RESTART: 'click_restart',

    GAME_MODE_SELECTED: 'game_mode_selected',

    // Creation
    DICTATION_CREATED: 'dictation_created',
    DICTATION_UPDATED: 'dictation_updated',

    // AI
    AI_GENERATION_STARTED: 'ai_generation_started',
    AI_GENERATION_COMPLETED: 'ai_generation_completed',
    AI_GENERATION_FAILED: 'ai_generation_failed',

    // Dashboard / Engagement
    DASHBOARD_CREATE_CLICKED: 'dashboard_create_clicked',
    GAME_PLAY_CLICKED: 'game_play_clicked',
} as const;
