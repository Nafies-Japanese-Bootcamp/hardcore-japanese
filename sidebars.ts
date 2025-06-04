import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learningSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Learning Plan Overview',
    },
    {
      type: 'category',
      label: 'Phase 1: Foundation of Fire',
      items: [
        'phase-1/overview',
        {
          type: 'category',
          label: 'Week 1',
          items: [
            'phase-1/week-1/w1-overview',
            'phase-1/week-1/w1-prep',
            'phase-1/week-1/w1-day-1',
            'phase-1/week-1/w1-day-2',
            'phase-1/week-1/w1-day-3',
            'phase-1/week-1/w1-day-4',
            'phase-1/week-1/w1-day-5',
            'phase-1/week-1/w1-day-6',
            'phase-1/week-1/w1-day-7',  
          ],
        }
        // 'phase-1/grammar', 
        // 'phase-1/vocabulary', 
        // 'phase-1/kanji', 
        // 'phase-1/speaking'
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Phase 2: Speed Climb',
    //   items: ['phase-2/overview', 'phase-2/grammar', 'phase-2/vocabulary', 'phase-2/kanji', 'phase-2/speaking'],
    // },
    // {
    //   type: 'category',
    //   label: 'Phase 3: Business Samurai',
    //   items: ['phase-3/overview', 'phase-3/business-japanese', 'phase-3/keigo', 'phase-3/technical-terms'],
    // },
    // {
    //   type: 'doc',
    //   id: 'final-push',
    //   label: 'Final Push',
    // },
    {
      type: 'doc',
      id: 'nafies-program',
      label: 'Nafies Program',
    },
  ],
  resourcesSidebar: [
    {
      type: 'doc',
      id: 'resources/index',
      label: 'Resources Overview',
    },
    {
      type: 'category',
      label: 'Grammar Resources',
      items: ['resources/grammar/minna-no-nihongo', 'resources/grammar/bunpro', 'resources/grammar/soumatome'],
    },
    {
      type: 'category',
      label: 'Vocabulary Resources',
      items: ['resources/vocabulary/anki', 'resources/vocabulary/soumatome-vocab'],
    },
    {
      type: 'category',
      label: 'Kanji Resources',
      items: ['resources/kanji/wanikani', 'resources/kanji/anki-kanji', 'resources/kanji/soumatome-kanji'],
    },
    {
      type: 'category',
      label: 'Listening Resources',
      items: ['resources/listening/nihongo-no-mori', 'resources/listening/japanese-pod101'],
    },
    {
      type: 'category',
      label: 'Speaking Resources',
      items: ['resources/speaking/shadowing', 'resources/speaking/hellotalk', 'resources/speaking/italki'],
    },
  ],
};

export default sidebars;
