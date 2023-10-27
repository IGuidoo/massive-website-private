## Guide to Using and Extending the Swipeable Components

### Overview:
The swipeable components provide a flexible way to display content that users can swipe through. This guide will help you understand how to use and extend these components.

---

### Components:

1. **SwipeableBase**: The base component responsible for handling swipe actions.
2. **SwipeableHeading**: Displays a heading based on the current active index.
3. **SwipeableTextNavigation**: Provides a navigation interface allowing users to select items by clicking or tapping.
4. **SwipeableArrowNavigation**: Displays arrow navigation for moving to the next or previous items.

---

### How to Use:

#### 1. SwipeableBase:
- **Props**:
  - `children`: Elements that will be rendered inside the base.
  - `activeIndex`: The current active index.
  - `setActiveIndex`: Function to update the active index.

- **Usage**:
```jsx
<SwipeableBase activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
  // Your swipable content goes here
</SwipeableBase>
```

#### 2. SwipeableHeading:
- **Props**:
  - `headings`: Array of headings to display.
  - `activeIndex`: The current active index.

- **Usage**:
```jsx
<SwipeableHeading headings={yourHeadingsArray} activeIndex={activeIndex} />
```

#### 3. SwipeableTextNavigation:
- **Props**:
  - `children`: Array of items to be displayed as navigation options.
  - `activeIndex`: The current active index.
  - `setActiveIndex`: Function to update the active index.

- **Usage**:
```jsx
<SwipeableTextNavigation activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
  // Your navigation items go here
</SwipeableTextNavigation>
```

#### 4. SwipeableArrowNavigation:
- **Props**:
  - `activeIndex`: The current active index.
  - `itemsCount`: Total number of items.
  - `setActiveIndex`: Function to update the active index.

- **Usage**:
```jsx
<SwipeableArrowNavigation activeIndex={activeIndex} itemsCount={totalItems} setActiveIndex={setActiveIndex} />
```

---

### How to Extend:

1. **Add New Components**:
   - If you want to add a new component to this swipeable ecosystem, ensure that it can accept and work with the `activeIndex` and `setActiveIndex` props. This will allow it to be integrated seamlessly with the existing components.

2. **Add New Features**:
   - For example, if you want to add an auto-play feature:
     - Update `SwipeableBase` to include a timer using `setInterval`.
     - Use `setActiveIndex` to periodically update the active index.
     - Add controls to start and stop the autoplay.

3. **Styling**:
   - Use the provided `styles` import or add your own styles to customize the appearance. Ensure that any new components you add are styled in a consistent manner.

4. **Enhancements**:
   - Consider adding accessibility features, improving responsiveness, or adding animations to enhance the user experience.

---

### Tips:
- Always ensure that the `activeIndex` remains within the bounds of 0 and the total number of items minus one.
- Use descriptive names for your state variables and props to make the code more readable.
- Test the components on various screen sizes and devices to ensure a consistent experience.

---

This guide provides a foundational understanding of the swipeable components. As with any component, it's essential to understand its inner workings to make the most of it and to extend it in ways that benefit your application.



### Using Swipeable Functionality with TextGridIcons:

#### 1. Setting the Active Index:
Before using the swipe functionality, you need to define a state for the `activeIndex`. This index will determine which chunk of data will be displayed at any given time.

```jsx
const [activeIndex, setActiveIndex] = useState(0);
```

#### 2. Conditional Rendering with SwipeableBase:
Wrap your `SwipeGridIconsText` component inside `SwipeableBase`. Use conditional rendering to display only the chunk of data that corresponds to the `activeIndex`.

```jsx
<SwipeableBase activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
    <SwipeGridIconsText data={chunks[activeIndex]} cssClass="grid-cols-2  md:grid-cols-3 lg:grid-rows-4 gap-4" />
</SwipeableBase>
```

#### 3. Adding Arrow Navigation:
If you want to provide arrow navigation to users, use the `SwipeableArrowNavigation` component:

```jsx
<SwipeableArrowNavigation activeIndex={activeIndex} itemsCount={chunks.length} setActiveIndex={setActiveIndex} />
```

By following the above steps, you can achieve a swipeable display with the `TextGridIcons` component. Remember, each swipeable "page" or "view" should be rendered conditionally based on the `activeIndex`, rather than stacking them in a list. This ensures that the user sees only one chunk of data at a time and can swipe left or right to navigate between them.







src/
|-- utilities/
|   |-- helpers/
|   |   |-- formatDate.js
|   |   |-- validateInput.js
|   |   |-- api.js
|   |   |-- ...
|   |
|   |-- hooks/
|   |   |-- useWindowSize.js
|   |   |-- useLocalStorage.js
|   |   |-- ...
|   |
|   |-- context/
|   |   |-- ThemeContext.js
|   |   |-- UserContext.js
|   |   |-- ...
|   |
|   |-- config/
|   |   |-- apiEndpoints.js
|   |   |-- themeConfig.js
|   |   |-- ...
