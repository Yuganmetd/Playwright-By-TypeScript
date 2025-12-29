# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [ref=e9] [cursor=pointer]
        - generic [ref=e11]:
          - link "YouTube Home" [ref=e12] [cursor=pointer]:
            - /url: /
          - generic [ref=e16]: IN
        - button "Skip navigation" [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: Skip navigation
      - generic [ref=e25]:
        - search [ref=e26]:
          - combobox "Search" [expanded] [ref=e29]
          - button "Search" [ref=e30] [cursor=pointer]
        - generic [ref=e33]:
          - button "Search with your voice" [ref=e35] [cursor=pointer]
          - tooltip "tooltip"
      - generic [ref=e42]:
        - button "Settings" [ref=e47] [cursor=pointer]
        - link "Sign in" [ref=e51] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
          - generic [ref=e54]: Sign in
  - navigation [ref=e58]
  - main [ref=e60]:
    - generic [ref=e70]:
      - generic [ref=e71]: Try searching to get started
      - generic [ref=e72]: Start watching videos to help us build a feed of videos you'll love.
```