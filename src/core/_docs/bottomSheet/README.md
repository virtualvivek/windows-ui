# BottomSheet


Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.

<br><img src="img/bottomSheet_default.png" width="820" />

<b>Note</b> ```yourTarget``` is the unique id use to access bottomSheet.

## Step 1. Defining structure

```html
 <div class="app-bottomsheet" id="targetSheetID">
    <div class="app-bottomsheet-toggle" data-id="targetSheetID"></div>
    <div class="app-bottomsheet-wrapper">
        <button><i class="icons10-camera"></i><span>Upload</span></button>
        <hr/>
        <button><i class="icons10-picture"></i><span>View</span></button>
        <button><i class="icons10-download"></i><span>Save</span></button>               
        <button><i class="icons10-trash"></i><span>Remove</span></button>
        <button class="app-bottomsheet-toggle" data-id="mm"><i class="icons10-cross"></i><span>Cancel</span></button>
    </div>
</div>
```
## Step 2. Calling Bottomsheet

```
Add two attributes to make a component(Button,Link..) bottomsheet callable 

1. class="app-bottomsheet-toggle"
2. data-id="targetSheetID" 
```

Then :

```html
 <input type="button" class="app-bottomsheet-toggle" data-id="targetSheetID" value="Show Bottom Sheet" />
```

## Result. 

<img src="img/bottomSheet_preview.png" width="880" />




