// AAA PREPROD
// File names in drive VERY Precise (for display9) and no more than one sub folder due to absence of substructure folder recursion [*]

// AA (Within Week or after MST Week)
// AA MUST ADD A NEW FEATURE SYMBOL w Date Modified and Fire Symbol for proximate examinations []
// AA Must have smoothness []
// AA Recursive Folder Loading ! []
// AA Table Proper []
// AA ADD OPTION TO UPLOAD AND CONTRIBUTE NOTES FROM STUDENTS
// AA Color as an argument to be resolved from the drive if possible
// AA Title Changing
// AA We are still worthy of the hammer

// A (Within Month)
// Put the minibar to use with icons to Different Locations in same Drive []
// Place Ads of Swiggy and Zomato []
// Pixel Analyze the page for click frequencies []
// SUBJECT SPECIFIC SVG VISCOUS ANIMATIONS []
// myHerupa SVG Loader []
// Enmark every file with Copyright Reserves []

// A+
// REACT Load from data.json and send user data to firebase server

// VH FIX
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // Attaching the same code to script over resizing instances
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})


var resourceURL = (window.location.href + "").split("#resURL=")[1]
var itemNames = []
var selectedDocumentId
var sidebarLoaded = true
var files = []
var folders = []
var sideDisplay = 'Full'
var countAd = 0


$('#resource-sidebar-mobile-ad-inlet-test').click(function () {
  var infoHttp = new XMLHttpRequest()
    infoHttp.onreadystatechange = function() {}
    let query = {
      query: `mutation {
        clickEvent (
          name: "CB-MOBILE"
        )
      }`
    }
    infoHttp.open("POST", 'https://infographicserver.herokuapp.com/graphql', true) // false for synchronous request
    infoHttp.setRequestHeader("Content-Type", "application/json")
    infoHttp.send(JSON.stringify(query))
})

$('#resource-sidebar-ad-test').click(function () {
  var infoHttp = new XMLHttpRequest()
    infoHttp.onreadystatechange = function() {}
    let query = {
      query: `mutation {
        clickEvent (
          name: "CB-DESKTOP"
        )
      }`
    }
    infoHttp.open("POST", 'https://infographicserver.herokuapp.com/graphql', true) // false for synchronous request
    infoHttp.setRequestHeader("Content-Type", "application/json")
    infoHttp.send(JSON.stringify(query))
})

console.log('Inner Width of Window: ', window.innerWidth)
console.log('Inner Height of Window: ', window.innerHeight)

var listDocAdIDs = ['one', 'two', 'three', 'four', 'five']
var listAdsenseDeskFixedAdsIDs = ['2712833606', '4820122198', '8432558989', '930665695', '7405938849']
var listAdsenseMobileFixedAdsIDs = ['1180754925', '8596210511', '8882672048', '6049938229', '7569590370']

var adTiles = []
// Monetary
var tileAds = [
  {
    adType: "Article",
    platform: "All",
    adId: 1,
    adHTML: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-4625423558686989"
         data-ad-slot="7408371487"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
  },
  {
    adType: "Article",
    platform: "All",
    adId: 2,
    adHTML: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-4625423558686989"
         data-ad-slot="2838571086"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
  },
  {
    adType: "Article",
    platform: "All",
    adId: 3,
    adHTML: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-4625423558686989"
         data-ad-slot="5819957649"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
  },
  {
    adType: "Article",
    platform: "All",
    adId: 4,
    adHTML: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-4625423558686989"
         data-ad-slot="4618556611"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
  },
  {
    adType: "Article",
    platform: "All",
    adId: 5,
    adHTML: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-4625423558686989"
         data-ad-slot="2089414436"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
  },
  {
    adType: "Article",
    platform: "All",
    adId: 6,
    adHTML: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle"
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-4625423558686989"
         data-ad-slot="6558324245"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
  }
];

// test Function to print article vars
setTimeout(function() {
  console.log(
    "Width: ",
    $(".resource-element").width(),
    " Height: ",
    $(".resource-element").height()
  );
}, 15000);

// Day Night Toggle
$("#toggle--daynight").prop("checked", true);
$("#toggle--daynight").click(function() {
  if (this.checked) {
    $(".resource-hub-document-main").css({ filter: "invert(0)" });
    $("#resource-lightdark-curr").css({
      color: "white",
      backgroundColor: "lightBlue"
    });
    $("#resource-lightdark-curr").html("Light");
    $("#resource-sidebar-toggle-static").css({ filter: "invert(0)" });
  } else {
    $(".resource-hub-document-main").css({ filter: "invert(1)" });
    $("#resource-lightdark-curr").css({
      color: "white",
      backgroundColor: "#111"
    });
    $("#resource-lightdark-curr").html("Dark");
    $("#resource-sidebar-toggle-static").css({ filter: "invert(1)" });
  }
});

// Sidebar Toggle Contoller
$("#resource-sidebar-toggle").click(function() {
  sidebarLoaded = !sidebarLoaded;
  if (window.innerWidth > 700) {
    if (sidebarLoaded) $("#resource-sidebar").css({ left: "0vw" });
    else $("#resource-sidebar").css({ left: "-100vw" });
  } else {
    if (sidebarLoaded) $("#resource-sidebar").css({ top: "100%" });
    else $("#resource-sidebar").css({ top: "25%" });
  }
});

// Static Sidebar Toggle Contoller
$("#resource-sidebar-toggle-static").click(function() {
  console.log(sidebarLoaded);
  sidebarLoaded = !sidebarLoaded;
  if (window.innerWidth > 700) {
    if (sidebarLoaded) $("#resource-sidebar").css({ left: "0vw" });
    else $("#resource-sidebar").css({ left: "0vw" });
  } else {
    if (sidebarLoaded) $("#resource-sidebar").css({ top: "100%" });
    else $("#resource-sidebar").css({ top: "25%" });
  }
});

// Mobo Chevron Controls
// UP
$("#resource-up-chevron").click(function() {
  var bottomSideBar = document.getElementById("resource-sidebar");
  $("#resource-sidebar-header").animate({ opacity: 1 });
  $("#resource-sidebar-mobo").animate({ opacity: 0 });
  bottomSideBar.style.top = "calc(var(--vh, 1vh) * 75)";
  bottomSideBar.style.height = "calc(var(--vh, 1vh) * 25)";
  sideBarOnDisplay = !sideBarOnDisplay;
});
// DOWN
$(".resource-down-chevron").click(function() {
  var bottomSideBar = document.getElementById("resource-sidebar");
  if (sideBarOnDisplay) {
    $("#resource-sidebar-header").animate({ opacity: 0 });
    $("#resource-sidebar-mobo").animate({ opacity: 1 });
    bottomSideBar.style.top = "calc(var(--vh, 1vh) * 93)";
    bottomSideBar.style.height = "calc(var(--vh, 1vh) * 07)";
    sideBarOnDisplay = !sideBarOnDisplay;
  } else {
    $("#resource-sidebar-header").animate({ opacity: 1 });
    $("#resource-sidebar-mobo").animate({ opacity: 0 });
    bottomSideBar.style.top = "calc(var(--vh, 1vh) * 75)";
    bottomSideBar.style.height = "calc(var(--vh, 1vh) * 25)";
    sideBarOnDisplay = !sideBarOnDisplay;
  }
});

// Desktop Chevron Controls for the Sidebar
$(".resource-sidebar-controls-left").click(function() {});

$("#resource-sidebar-controls-right").click(function() {
  $("#resource-sidebar").css({ width: "5000vw" });
});

// Search Feature
$("#resource-sidebar-search-input").on("input", function(e) {
  $(".resource-element-capsule").remove();
  // console.log(files)

  files.map((file, index) => {
    if (file.name.toUpperCase().includes(e.target.value.toUpperCase())) {
      $("#resource-grid").append(file.elem);
    }
    if (index == files.length - 1) insertAdTile(1, "Advertisement");
  });
  setOnClickListeners();
});

$(document).ready(function() {
  // Set the URL for Request FOLDER CONTENTS
  var URL =
    "https://www.googleapis.com/drive/v3/files?q=%27" +
    resourceURL +
    "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y&fields=*";
  // Show the loader while the list loads
  // $('#resource-list-loader').css({'display': 'block'})
  // Get links of the children using XMLHTTP
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    url = "https://drive.google.com/drive/u/1/folders/" + resourceURL; //Show in drive
    // console.log(url);
    $(".resource-show-in-drive").attr("href", url);
    // console.log(resourceURL);
    if (this.readyState == 4 && this.status == 200) {
      for (i = 0; i < 8; i++) {
        $("#resource-grid-loading-hangar").remove();
      }
      console.log(JSON.parse(this.responseText));
      // $('#resource-list-loader').css({'display': 'none'})
      // For each element in the GDrive Directory

console.log( files.sort((a, b) => (a.name>b.name) ? true : false));
console.log(files);
      JSON.parse(this.responseText).files.forEach(file => {
        // Check if not Folder
        if (file.mimeType != "application/vnd.google-apps.folder") {
          // Layout the mainframe called Resource-Element
          var elem = document.createElement("div");
          elem.className += " resource-element";
          elem.className += " display7";
          elem.className += " resource-element-id-" + file.id;

          // Lay out its branch [AAA]  as Resource-Element-Branch
          var branch = document.createElement("div");
          branch.className += " resource-element-branch"
          var branchText = document.createElement("div")
          branchText.className += ' resource-element-branch-text display8'
          branchText.innerHTML = file.name.split('.')[0]

          // branchtext = setScroll(branchText, file.name.split(".")[0]);
          branch.append(branchText);

          // Encapsulate Mainfrome and its branch in Resource-Capsule
          var capsule = document.createElement("div");
          capsule.className += " resource-element-capsule";
          capsule.className += " resource-element-capsule-id-" + file.id;

          // Thumbnail insertion
          // ThumbnailDiv
          thumbnail = document.createElement("div");
          thumbnail.className += " resource-element-thumbnail";
          // ThumbnailImage
          thumbnailImage = document.createElement("img");
          if (file.thumbnailLink)
            thumbnailImage.src =
              file.thumbnailLink.substring(0, file.thumbnailLink.length - 3) +
              "720";
          // Insert Thumbnail Image to Thumbnail
          thumbnail.append(thumbnailImage);

          // Add Thumbnail to the mainframe
          elem.append(thumbnail);
          
          // Append branch to Capsule
          capsule.append(branch)
          
          // Preppend Mainframe to the Capsule
          capsule.prepend(elem)
          
          // Create an internal Js Reference Object and store it in files list
          newFile = {};
          newFile.elem = capsule;
          newFile.id = file.id;
          newFile.size = file.size;
          newFile.name = file.name;
          newFile.thumbnail = thumbnail;
          files.push(newFile);
          files.sort((a, b) => (a.name>b.name) ? true : false)
console.log(files);
        } else {
          // We encounter a subfolder
          // Create a Generic Folder Chip as Resource-Sidebar-FolderChip
          genericChip = document.createElement("div");
          genericChip.className +=
            " display4 resource-sidebar-folderChip resource-sidebar-folderChip-id-" +
            file.id +
            " display9";
          genericChip.innerHTML = file.name;

          // Set onClick Listener later to avoid multiple API calls [AA]

          // Check if a folderbar exists already!
          if (!document.getElementById("resource-sidebar-folderBar")) {
            // Create a FolderBar
            folderBar = document.createElement("div");
            folderBar.id = "resource-sidebar-folderBar";
            folderBar.className += " resource-sidebar-content-folderBar";

            $("#resource-sidebar-header").append(folderBar);

            // Create A General Chip to Always Refer to the main content of the Directory (Treat this as a folder)
            // Create an internal JS reference for a GENERAL folder and store it in folders List
            generalChip = {};
            generalChip.name = "General";
            generalChip.id = resourceURL;
            generalChip.chip = document.createElement("div");
            generalChip.chip.className =
              " resource-sidebar-folderChip resource-sidebar-folderChip-id-" +
              resourceURL +
              " display9";
            generalChip.chip.innerHTML = "General";
            folders.push(generalChip);
            $("#resource-sidebar-folderBar").append(generalChip.chip);

            // [AAA] Style the General by Default and other FolderChips to Seem Selected when Selected {CSS}

            // Allow side scrollling on scroll down
            if (window.innerWidth > 700) {
              $("#resource-sidebar-folderBar").mousewheel(function(
                event,
                delta
              ) {
                this.scrollLeft -= delta * 1;
                event.preventDefault();
              });
            }
          }

          // Create an internal JS reference for a folder and store it in folders List
          folderChip = {};
          folderChip.name = file.name;
          folderChip.id = file.id;
          folderChip.chip = genericChip;
          folders.push(folderChip);
          // Append chip to folderbar
          $("#resource-sidebar-folderBar").append(genericChip);
        }
      });
      $(".resource-sidebar-folderChip").click(function() {
        console.log(123);
        $(".resource-element-capsule").remove();
        // $('#resource-list-loader').css({'display': 'none'})
        // Reset the files to be shown
        files = [];
        $("#resource-list-loader").css({ display: "block" });
        // Send a new Request
        // Set the newURL for Request FOLDER CONTENTS
        var URLSub =
          "https://www.googleapis.com/drive/v3/files?q=%27" +
          this.className.split("id-")[1].split(" ")[0] +
          "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y&fields=*";
        var xmlHttpSubFolder = new XMLHttpRequest();
        xmlHttpSubFolder.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            $("#resource-list-loader").css({ display: "none"})

            // The following should probably be a separate function
            JSON.parse(this.responseText).files.forEach(file => {
              // Check if not Folder
              if (file.mimeType != "application/vnd.google-apps.folder") {
                // Layout the mainframe called Resource-Element
                var elem = document.createElement("div")
                elem.className += " resource-element"
                elem.className += " display7"
                elem.className += " resource-element-id-" + file.id

                // Lay out its branch [AAA]  as Resource-Element-Branch
                var branch = document.createElement("div")
                branch.className += " resource-element-branch"
                var branchText = document.createElement("div")
                branchText.className += ' resource-element-branch-text display8'
                branchText.innerHTML = file.name.split('.')[0]

                // branchtext = setScroll(branchText, file.name.split(".")[0]);
                branch.append(branchText);

                // Encapsulate Mainfrome and its branch in Resource-Capsule
                var capsule = document.createElement("div");
                capsule.className += " resource-element-capsule";
                capsule.className += " resource-element-capsule-id-" + file.id;

                // Thumbnail insertion
                // ThumbnailDiv
                thumbnail = document.createElement("div");
                thumbnail.className += " resource-element-thumbnail";
                // ThumbnailImage
                thumbnailImage = document.createElement("img");
                if (file.thumbnailLink)
                  thumbnailImage.src =
                    file.thumbnailLink.substring(
                      0,
                      file.thumbnailLink.length - 3
                    ) + "720";
                // Insert Thumbnail Image to Thumbnail
                thumbnail.append(thumbnailImage);

                // Add Thumbnail to the mainframe
                elem.append(thumbnail);

                // Append branch to Capsule
                capsule.append(branch);
                // Preppend Mainframe to the Capsule
                capsule.prepend(elem);

                // Create an internal Js Reference Object and store it in files list
                newFile = {};
                newFile.elem = capsule;
                newFile.id = file.id;
                newFile.name = file.name;
                newFile.size = file.size;
                newFile.thumbnail = thumbnail;
                files.push(newFile);
              }
            })

            // TEST
            files.reverse()

            // Append the files one by one
            files.map((file, index) => {
              if (index == 0) countAd = 0;
              if((index % 7) == 3 && countAd < 1 &&window.innerWidth > 700) insertAdTile(1, 'Advertisement')
              document.getElementById("resource-grid").append(file.elem)
            });

            setElementClicker()
            // var placeholderDiv = document.createElement('div')
            // placeholderDiv.className += ' resource-element-capsule placeholderDiv'
            // document.getElementById("resource-grid").append(placeholderDiv)
            // console.log('Inserted Placeholder')
          }
        };
        xmlHttpSubFolder.open("GET", URLSub, true) // false for synchronous request
        xmlHttpSubFolder.send();
      });
    }

    // TEST
    // files.reverse()

    files.map((file, index) => {
      if (index == 0) countAd = 0
      if((index % 7) == 3 && countAd < 1 &&window.innerWidth > 700) insertAdTile(1, 'Advertisement')
      document.getElementById("resource-grid").append(file.elem)
    });
    // console.log('Once')
    // var placeholderDiv = document.createElement('div')
    // placeholderDiv.className += ' resource-element-capsule placeholderDiv'
    // document.getElementById("resource-grid").append(placeholderDiv)
    // console.log('Inserted Placeholder')

    // Set the listeners
    setOnClickListeners();
  };

  // Asynchronusly call for Material
  xmlHttp.open("GET", URL, true); // false for synchronous request
  xmlHttp.send();
});

$('#resource-sidebar-header-heading').click(function () {
  let query = {
    query: `mutation {
      createAction (
        name: "Opened in Drive",
        device: "${window.innerWidth > 700 ? 'DR-DESKTOP' : 'DR-MOBILE'}"
      )
    }`
  }
  var actionHttp = new XMLHttpRequest();
  actionHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("sent")
    } else {
      console.log("Error")
    }
  }
  actionHttp.open(
    "POST",
    "https://infographicserver.herokuapp.com/graphql",
    true
  ) // false for synchronous request
  actionHttp.setRequestHeader("Content-Type", "application/json")
  actionHttp.send(JSON.stringify(query))
})

// Contribute Option
$('#updates-upload-panel-btn').click(function () {
  window.open('http://bit.ly/volunteermh', '_blank')
})

// Bouncy Animation for Resource-Elements moving in and out
$("#resource-grid").scroll(function() {
  function checkTop(elem) {
    var elemTop = $(elem).offset().top;
    var gridTop = $("#resource-grid").offset().top;
    var gridBottom =
      $("#resource-grid").offset().top + $("#resource-grid").height();

    // Test Logger
    // console.log('GridTop: ' + gridTop + 'GridBottom: ' + gridBottom + ' ElemTop: ' + elemTop)

    if (elemTop >= gridTop && elemTop <= gridBottom) return 1;
    else return 0;
  }
  // adTiles.map((adTile , index)=> {
  //   if(!(checkTop('.resource-element-ad-' + (index + 1)))) {
  //     $('.resource-element-ad-capsule-' + (index + 1)).css({transform: 'scale(0)'})
  //   }
  //   else {
  //     $('.resource-element-ad-capsule-' + (index + 1)).css({transform: 'scale(1)'})
  //   }
  // })
  // SET LATER
  // files.map(file => {
  //   if(!(checkTop('.resource-element-id-' + file.id))) {
  //     $('.resource-element-capsule-id-' + file.id).css({transform: 'scale(0)'})
  //   }
  //   else {
  //     $('.resource-element-capsule-id-' + file.id).css({transform: 'scale(1)'})
  //   }
  // })
});

var setOnClickListeners = function() {
  setElementClicker();
};

var setElementClicker = function() {
  // ELement Tile Listener
  $(".resource-element").click(function() {
    // If there exists a loaded document beforehand then go on and remove it
    if ($(".resource-loaded-document")) {
      $(".resource-loaded-document").remove();
    }

    $("#resource-loader").css({ display: "block" });

    // Create a new Document
    var loadDocument = document.createElement("iframe");

    var infoHttp = new XMLHttpRequest();
    infoHttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("sent");
      } else {
        console.log("Error");
      }
    };
    var clickedFile = {};
    files.map(file => {
      if (file.id == this.className.split("resource-element-id-")[1])
        clickedFile = file;
    });
    console.log("Checked File: ", clickedFile);
    // const query = `mutation { createInfo (name: "${clickedFile.name}", size: ${clickedFile.size}, fileID: "${this.className.split('resource-element-id-')[1]}") { instantLogged } }`
    let query = {
      query: `mutation {
        createInfo (
          name: "${clickedFile.name}",
          size: ${clickedFile.size},
          fileID: "${this.className.split("resource-element-id-")[1]}"
        )
      }`
    };
    infoHttp.open(
      "POST",
      "https://infographicserver.herokuapp.com/graphql",
      true
    ); // false for synchronous request
    infoHttp.setRequestHeader("Content-Type", "application/json");
    infoHttp.send(JSON.stringify(query));

    loadDocument.className +=
      " resource-loading-document resource-loaded-document";
    loadDocument.id = "loadDocument";
    loadDocument.src =
      "https://docs.google.com/file/d/" +
      this.className.split("resource-element-id-")[1] +
      "/preview?usp=drivesdk";
    document
      .getElementById("resource-overlay-document-payload")
      .append(loadDocument);
    if (window.innerWidth > 700) {
      $("#resource-sidebar").css({
        left: "-100vw"
      });
    } else {
      // $('#resource-sidebar').css({'top': '90%'})
      $("#resource-sidebar").css({ top: "calc(var(--vh, 1vh) * 90)" });
      document.getElementById("resource-sidebar-mobile-ad").style.opacity = 1;
      // $('#resource-sidebar-mobile-ad-inlet').html(tileAds[8].adHTML)
      $("#resource-sidebar-mobile-goback").css({ display: "block" });
      $("#resource-sidebar-mobile-goback").click(function() {
        $("#resource-sidebar").css({
          top: "10%",
          height: "calc(var(--vh, 1vh) * 90)"
        });
        $("#resource-sidebar-mobile-ad").css({
          top: "auto",
          bottom: "0vh",
          "z-index": 5
        });
      });
      $("#resource-sidebar-mobile-ad").css({ top: "0" });
    }
    sidebarDisplay = !sideDisplay;
    $("#loadDocument").on("load", function() {
      $("#resource-loader").css({ display: "none" });
    });
  });
};

// var setScroll = function(elem, elemText) {
//   if (elemText.length > 25) {
//     console.log("overflow");
//     var branchText = elem.innerHTML;
//     elem.innerHTML = "";
//     var marqueeChild = document.createElement("marquee");
//     marqueeChild.className += " display9";
//     marqueeChild.style.width = $(parent).width();
//     marqueeChild.innerHTML = branchText;
//     elem.append(marqueeChild);
//     elem.style.color = "white";
//     marqueeChild.style.color = "white";
//     marqueeChild.scrollAmount = 5;
//     return elem;
//   } else {
//     elem.style.color = "white";
//     return elem;
//   }
// };

// Utility Function to add Ads [Spacer: Width of the Ad] [AAA: Spacer == 2 posibility]
var insertAdTile = function(spacer, branchText) {
  // Set Ad Object to return
  var adTile = {};
  if (spacer == 1) {
    // Layout the mainframe called Resource-
    var wrapA = document.createElement('a')
    if(window.innerWidth < 700) {
      wrapA.href = 'https://cb.lk/herumob'
    }
    else {
      wrapA.href = 'https://cb.lk/heruweb'
    }
    wrapA.target = '_blank'
    var elem = document.createElement("div");
    elem.className +=
      " resource-element-ad resource-element-ad-" +
      (countAd + 1);
    // elem.innerHTML =

    // var externalScript  = document.createElement("script")
    // externalScript.type = "text/javascript"
    // externalScript.setAttribute('async','async')
    // externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    // elem.appendChild(externalScript)

    // var ins = document.createElement("ins")
    // ins.setAttribute('id',listDocAdIDs[countAd])
    // ins.setAttribute('class','adsbygoogle')
    // if(window.innerWidth > 700) {
    //   ins.setAttribute('style','display:inline-block;width:300px;height:150px')
    // }
    // else {
    //   ins.setAttribute('style','display:inline-block;width:150px;height:64px')
    // }
    // ins.setAttribute('data-ad-client','ca-pub-4625423558686989')
    // if(window.innerWidth > 700) {
    //   ins.setAttribute('data-ad-slot', listAdsenseDeskFixedAdsIDs[countAd])
    // }
    // else {
    //   ins.setAttribute('data-ad-slot', listAdsenseMobileFixedAdsIDs[countAd])
    // }
    // elem.appendChild(ins)

    // var inlineScript = document.createElement("script")
    // inlineScript.type = "text/javascript";
    // inlineScript.text = '(adsbygoogle = window.adsbygoogle || []).push({});'
    // elem.appendChild(inlineScript)

    // Lay out its branch [AAA]  as Resource-Element-Branch
    var branch = document.createElement("div");
    branch.className +=
      " resource-element-branch resource-element-ad-branch display9";
    branch.innerHTML = branchText;

    // Encapsulate Mainfrome and its branch in Resource-Capsule
    var capsule = document.createElement("div");
    capsule.className +=
      " resource-element-capsule resource-element-ad-capsule resource-element-ad-capsule-" +
      (countAd + 1);

    // Append branch to Capsule
    capsule.append(branch);
    // Preppend Mainframe to the Capsule
    wrapA.append(elem)
    capsule.prepend(wrapA);

    console.log(countAd);

    // Create an internal Js Reference Object and store it in files list
    adTile.spacer = 1;
    adTile.elem = capsule;
    adTile.id = "ad";
    adTile.adId = countAd++;
  } else {
  }
  document.getElementById("resource-grid").append(adTile.elem);
  adTiles.push(adTile);
};
