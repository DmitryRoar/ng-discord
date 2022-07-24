## SideMenuWrap
### ClassName
```scss
.sm-wrap
```
### Styles
```scss
 .sm-wrap {
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 5px;
    background: $main-bg;
    height: $content-height;
    flex-direction: column;
    width: $server-width;
    &::-webkit-scrollbar {
      display: none
    }
  
    button {
      background: none;
    }
  }
```



## Flex
### Styles
```scss
 .flex {
   display: flex;
   align-items: center;
   &-inline {
     display: inline-flex;
     align-items: center;
   }
   &, &-inline {
     &.column {
       flex-direction: column;
     }
     &.sb {
       justify-content: space-between;
     }
     &.start {
       justify-content: flex-start;
     }
     &.sb {
       justify-content: flex-end;
     }
   }
 }
```

