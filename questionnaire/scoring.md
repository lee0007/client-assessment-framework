# Assessment Scoring Methodology

This document outlines the systematic approach used to score and interpret the Client Assessment Questionnaire responses. This methodology is designed to identify client types and potential risk factors in a consistent manner.

## Response Scoring

Each response is assigned a numerical value based on the following scale:

| Response | Score |
|----------|-------|
| Strongly agree | +2 |
| Agree | +1 |
| Neutral | 0 |
| Disagree | -1 |
| Strongly disagree | -2 |

## Dimension Calculations

### 1. Internal vs External Expertise Orientation

- **Internal Score**: Sum the scores from questions 1-5 (range: -10 to +10)
- **External Score**: Sum the scores from questions 6-10 (range: -10 to +10)
- **Final I-E Dimension Score**: Internal Score - External Score
  - Positive score indicates Internal orientation
  - Negative score indicates External orientation

### 2. Sensing vs Intuition Information Processing

- **Sensing Score**: Sum the scores from questions 11-15 (range: -10 to +10)
- **Intuition Score**: Sum the scores from questions 16-20 (range: -10 to +10)
- **Final S-N Dimension Score**: Sensing Score - Intuition Score
  - Positive score indicates Sensing preference
  - Negative score indicates Intuition preference

### 3. Thinking vs Feeling Decision-Making

- **Thinking Score**: Sum the scores from questions 21-25 (range: -10 to +10)
- **Feeling Score**: Sum the scores from questions 26-30 (range: -10 to +10)
- **Final T-F Dimension Score**: Thinking Score - Feeling Score
  - Positive score indicates Thinking preference
  - Negative score indicates Feeling preference

### 4. Judging vs Perceiving Approach

- **Judging Score**: Sum the scores from questions 31-35 (range: -10 to +10)
- **Perceiving Score**: Sum the scores from questions 36-40 (range: -10 to +10)
- **Final J-P Dimension Score**: Judging Score - Perceiving Score
  - Positive score indicates Judging preference
  - Negative score indicates Perceiving preference

## Preference Strength Interpretation

For each dimension, the score indicates both direction and strength of preference:

| Score Range | Interpretation |
|-------------|----------------|
| 7 to 10 (or -7 to -10) | Strong preference |
| 4 to 6 (or -4 to -6) | Moderate preference |
| 1 to 3 (or -1 to -3) | Slight preference |
| 0 | No clear preference |

## Client Type Classification

The four-letter code is determined by the sign of each dimension score:

1. **First Letter**: I or E (Internal or External)
2. **Second Letter**: S or N (Sensing or Intuition)
3. **Third Letter**: T or F (Thinking or Feeling)
4. **Fourth Letter**: J or P (Judging or Perceiving)

For example, a client with these dimension scores:
- I-E: +5 (Internal)
- S-N: -3 (Intuition)
- T-F: +8 (Thinking)
- J-P: -2 (Perceiving)

Would be classified as: INTP


## Client Type Characteristics and Recommended Approaches

Based on the four-letter code (similar to MBTI), you'll have 16 possible client types. Here's a preliminary interpretation of what each type might represent in our context:

| Type | Description | Base Risk | Rating
|------|-------------|------------------|-----------|
| ISTJ | Internal, detail-focused, logical, structured |1| Low |
| ISFJ | Internal, detail-focused, consensus-oriented, structured |2| Low-Medium |
| INFJ | Internal, big-picture, consensus-oriented, structured |4| Medium |
| INTJ | Internal, big-picture, logical, structured |1| Low |
| ISTP | Internal, detail-focused, logical, flexible |3| Medium |
| ISFP | Internal, detail-focused, consensus-oriented, flexible |5| Medium-High |
| INFP | Internal, big-picture, consensus-oriented, flexible |6| High |
| INTP | Internal, big-picture, logical, flexible |3| Medium |
| ESTJ | External, detail-focused, logical, structured |1| Low |
| ESFJ | External, detail-focused, consensus-oriented, structured |2| Low-Medium |
| ENFJ | External, big-picture, consensus-oriented, structured |3| Medium |
| ENTJ | External, big-picture, logical, structured |1| Low |
| ESTP | External, detail-focused, logical, flexible |5| Medium-High |
| ESFP | External, detail-focused, consensus-oriented, flexible |6| High |
| ENFP | External, big-picture, consensus-oriented, flexible |7| High |
| ENTP | External, big-picture, logical, flexible |4| Medium |

### Internal, Structured Types

**ISTJ - "The Inspector"**
- *Characteristics*: Detail-oriented, methodical, relies on internal expertise
- *Approach*: Provide concrete examples, clear deliverables, respect their process
- *Risk Level*: Low (1)

**ISFJ - "The Protector"**
- *Characteristics*: Practical, service-oriented, consensus-building
- *Approach*: Focus on practical impact for team, provide clear process
- *Risk Level*: Low-Medium (2)

### External, Structured Types

**ESTJ - "The Supervisor"**
- *Characteristics*: Organized, practical, results-driven
- *Approach*: Structured process, clear deliverables, efficiency focus
- *Risk Level*: Low (1)

**ENTJ - "The Commander"**
- *Characteristics*: Strategic, decisive, logical
- *Approach*: Strategic planning, decision-oriented, efficiency
- *Risk Level*: Low (1)

### High-Risk Types

**ENFP - "The Champion"**
- *Characteristics*: Enthusiastic about possibilities, people-oriented, flexible
- *Approach*: Connect to mission, emphasize possibilities, maintain focus
- *Risk Level*: High (7)

**ESFP - "The Performer"**
- *Characteristics*: Action-oriented, people-focused, present-centered
- *Approach*: Emphasize concrete benefits, maintain structure
- *Risk Level*: High (6)

For complete descriptions of all 16 types and their recommended approaches, refer to the Reference sheet in the Excel assessment template.

## Validation Process

This scoring methodology is being validated through:

1. **Retrospective Analysis**: Scoring past clients and correlating with outcomes
2. **Inter-rater Reliability**: Multiple team members scoring the same clients
3. **Predictive Testing**: Prospective testing with new clients

As patterns emerge, both the questionnaire and scoring methodology will be refined to improve accuracy and predictive value.

## Implementation Notes

1. The Excel template automatically calculates all these scores and classifications.
2. The visualization dashboard provides an interactive way to explore client types.
3. For team discussion, focus on dimension scores and patterns rather than just the four-letter code.
4. Document both successes and failures to refine the risk assessment model.

## Visualization

Create a spider/radar chart showing the client's position on each dimension:

```
         Internal (+10)
              |
              |
Perceiving (-10) -- Judging (+10)
              |
              |
         External (-10)
