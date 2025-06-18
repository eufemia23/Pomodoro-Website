# Pomodoro Website

## Overview
This is my first personal project. I finished learning React concepts and wanted to practice them by creating a Pomodoro Timer Website. This is going to be an ongoing project, since I don't yet have all of the skills needed to create a real website. I will continue finishing it after learning backend.

## Functionality ideas at start
The website is made up of a pomodoro timer component that can be stopped or reset. The timer has two modes: pomodoro and break. The website starts of with the pomodoro mode on, and automatically switches to break when the pomodoro timer finishes. Then it switches to pomodoro again, and so on, until the amount of sessions has finished. You can add or remove the amount of sessions.
The second part of the website is made up of todo list, calendar, statistics, profile, and settings tabs. In the todo list, you can add your current todos, and mark them as done. The finished tasks are shown on the side. The calendar tab includes a calendar of the current month, and upon clicking on a specific day, displays a schedule. The statistics tab will display monthly and yearly statistics of how many hours the user has focused for. The profile tab would allow the user to log in, see their profile information, set their avatar, and possibly link their statistics to notion or other productivity apps. It's unclear for me so far how to do it, so for now I won't add much there. The settings tab would include options to set the pomodoro timer and break timer to a custom amount of minutes, and possibly some other options like theme colors, alarm tone, etc.

## List of features to add
- [ ] Keyboard control for all input/button elements
- [ ] Question mark that starts a tutorial displaying hints all over the screen related to how to use the website and what features the website has and telling you what pomodoro is
- [ ] Responsive design (smaller screen = the timer fills up the whole screen and the diary is displayed underneath)
- [ ] Credits, link to my Github, etc.
- [ ] Home tab that welcomes you to the page
### Timer
- [x] Working timer
- [x] Timer is able to be stopped, paused, and reset
- [x] Timer has two modes: 'pomodoro' and 'break'
- [x] Timer automatically switches between 'pomodoro' and 'break' when started until all sessions are done
- [x] There's a sound at the beginning and end of 'pomodoro' timer
- [x] Sessions are able to be removed or added
- [x] When sessions are done, a pop up appears that lets you exit or add another session
- [ ] The amount of time is controllable (in settings) and saves in localStorage
- [x] When the sessions are equal to 0, and you want to start the timer, a little hint appears that tells you to add sessions first
### Todo List
- [x] Working Add Todo List that lets you input your todo, delete it, and mark it as done
- [x] Working Done Todos List where todos marked as done appear, and are able to be marked as undone (and go back to the Add Todo List) or deleted
- [x] Both of the Todo Lists are saved into localStorage
- [ ] The Todo List can span over multiple pages of the diary when too long and you can switch through them by flipping the pages (lower right corner of the diary); the Done Todos List appears at the end, on a new page
### Calendar
- [ ] Working calendar that lets you switch through months and years and is styled to match the website's aesthetic
- [ ] When a day is clicked, it gets visually selected, and the day is displayed on the right side of the diary
- [ ] Each day has its own schedule, saved to localStorage
### Statistics
- [ ] When not logged in, the statistics fields are blurred and unaccessible, stating you need to be logged in to access them
- [ ] When logged in, there's multiple fields for different statistics: today, this week, this month, this year, displaying the amount of time you've studied so far
### Profile
- [ ] When not logged in, a component for logging in/signing up is displayed; when logged in, a component with your name, username, character and basic statistics (today: x hours, this week: x hours) is displayed.
- [ ] There's a create your own character component that allows you to edit the skin color, hair, outfit, etc. of your character; it will then be displayed on the top right corner of the screen to help you with studying
- [ ] There's an add friends component that allows you to search for usernames, and add them as friends
- [ ] There's a friends component that shows you the basic statistics and characters of your friends, and if they're currently studying
### Settings
- [ ] Settings related to changing the pomodoro and break time; updates the time and saves it in localStorage
- [ ] Settings related to the sound that plays at the beginning and end of the pomodoro timer
- [ ] Settings related to the starting day of the calendar (Sunday or Monday)
- [ ] Settings related to your profile and logging in (password, email, name, username etc.)


