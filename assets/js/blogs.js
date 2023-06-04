const blogs = [
    {
        title: "Fitness Blog 1",
        date: "01/01/2023",
        tags: ["Tag 1-1", "Tag 1-2", "Tag 1-3"],
        author: "Author 1",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante eget tincidunt euismod. Morbi varius, nunc et dictum condimentum, sem diam vulputate nisl, at congue enim felis vel purus. Morbi vestibulum sollicitudin mattis. Curabitur in neque sit amet metus tempor tincidunt eget nec ligula. In pretium odio vel urna iaculis malesuada. Quisque orci mauris, placerat consectetur velit commodo, accumsan blandit ipsum. Aenean rhoncus nunc egestas libero faucibus pellentesque. Donec ante arcu, semper a faucibus malesuada, pulvinar id lectus. Sed tempus, nisl sit amet scelerisque imperdiet, felis dui pellentesque nibh, vel aliquet leo est vel neque. Morbi vel porttitor massa. Fusce vehicula rutrum mauris. Aliquam tristique justo dui, eget congue mi sodales a. Etiam sit amet augue in neque aliquet porta. Nam elementum est nec urna pulvinar blandit. Vestibulum egestas eros id ante laoreet tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.

        Pellentesque in feugiat eros. Phasellus a lorem fermentum lorem aliquam bibendum ac at lorem. In hac habitasse platea dictumst. Suspendisse blandit urna at pulvinar auctor. Quisque sit amet egestas lacus, commodo bibendum lectus. Sed purus tellus, mollis a odio at, semper feugiat arcu. Morbi feugiat erat nisi, ut bibendum enim consectetur eget. In pharetra fringilla erat, at volutpat tellus ullamcorper rutrum. Pellentesque eros nisi, scelerisque a consequat eu, maximus posuere elit. Suspendisse egestas purus fringilla elit blandit, et semper dui interdum. Integer sit amet accumsan arcu.
        
        Nunc ex orci, venenatis non euismod eu, interdum vitae quam. Sed quis lacinia sapien, vel bibendum ex. Fusce egestas dapibus dapibus. Duis et ultricies orci. Quisque faucibus, justo id semper dapibus, justo erat ultricies ipsum, elementum consequat ipsum enim sed neque. Sed ligula nisl, ultricies eget aliquet nec, lacinia non orci. Nunc nec nulla ut nisl gravida luctus id eget nunc.
        
        Fusce scelerisque congue purus viverra convallis. Maecenas nec pellentesque velit. Etiam dignissim neque lectus, in consectetur quam sollicitudin eget. Donec vestibulum tortor non mollis finibus. Sed quis nibh sed elit blandit iaculis. Morbi id iaculis nibh, id auctor purus. Aenean eu congue justo. In lobortis ac elit vel dictum. Nulla ac gravida tellus. Praesent nunc turpis, sollicitudin nec nisl sit amet, condimentum cursus orci. Nunc facilisis suscipit nibh eu rutrum.
        
        Proin vitae vulputate leo. Maecenas vel convallis urna, egestas varius arcu. Fusce vitae rutrum justo, venenatis ullamcorper justo. Duis fringilla id neque sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere ipsum eu leo tincidunt gravida. Aliquam ac magna vel augue consequat fermentum. Quisque sodales aliquet metus eu elementum. Quisque sed metus sit amet sem ultricies vehicula. Nunc aliquet lacus blandit purus consequat, id condimentum turpis molestie.`
    },
    {
        title: "Fitness Blog 2",
        date: "02/02/2023",
        tags: ["Tag 2-1", "Tag 2-2", "Tag 2-3"],
        author: "Author 2",
        content: `Maecenas quis nulla quis metus condimentum dictum vitae non ligula. Aenean tristique mi in mollis porttitor. Nam ut dapibus magna, tincidunt maximus ante. Cras ut varius risus, quis laoreet leo. Aenean fermentum hendrerit metus, nec varius massa bibendum ut. Cras faucibus, lectus sed malesuada consequat, est diam tempus metus, quis tempus velit sapien nec turpis. Proin ut iaculis libero. Mauris pharetra, sapien sed rutrum dapibus, ante velit pharetra sem, at blandit quam quam sed tellus. Mauris sed lorem finibus, blandit sem ut, bibendum lacus. Cras a purus a libero mattis viverra. Donec ultricies urna in faucibus sollicitudin. Curabitur accumsan ultrices luctus. Pellentesque non ligula feugiat, dapibus lectus vitae, iaculis ligula. Duis ac libero pharetra, laoreet lectus sed, semper tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

        Morbi ultrices mollis metus, at malesuada massa blandit ac. Mauris efficitur, tellus eu fermentum viverra, sapien urna tristique ipsum, quis finibus magna felis at tortor. Vestibulum vel mi at orci convallis sagittis. Fusce ut nisi at turpis mattis finibus. Praesent et ligula laoreet, convallis erat at, aliquet purus. Ut iaculis nunc ex, nec porta enim pharetra quis. Ut aliquam scelerisque tellus eget sodales. Maecenas vestibulum nibh odio, nec blandit neque finibus id. Sed quam dolor, lacinia quis eros et, iaculis tincidunt augue. Cras sodales sapien non erat condimentum, quis finibus nisl aliquam. Aenean at rhoncus orci, elementum molestie turpis. Curabitur congue, mauris at pellentesque ultricies, ipsum justo rutrum nisi, ac aliquam nunc mauris sed arcu. Etiam in lacus euismod, auctor eros ut, scelerisque risus. Suspendisse faucibus mauris et bibendum aliquam. In elementum ligula vitae nisi euismod auctor.
        
        Sed sed ante sem. Sed maximus quam eget dolor volutpat, eu sollicitudin arcu aliquam. Nulla facilisi. Sed at venenatis diam. Vivamus eget metus ex. Donec vulputate auctor odio, at consequat augue imperdiet id. Vivamus tortor velit, volutpat sed semper id, molestie vel neque. Mauris eget volutpat purus.
        
        Donec pulvinar neque velit, sed cursus nulla tristique a. Cras nulla felis, facilisis at pulvinar ac, ornare sed nulla. Nullam ac eros ut neque scelerisque consequat. Morbi justo leo, rutrum id facilisis quis, tristique et tortor. Nam vel viverra enim. Fusce sit amet augue diam. Donec pulvinar nisl rhoncus lorem auctor pharetra. Nullam fermentum massa maximus ante bibendum, aliquet facilisis diam efficitur. Aenean luctus nisl ac augue egestas, quis facilisis nunc gravida. Quisque tempus tellus vitae rutrum lacinia. Fusce ac molestie orci. Ut mi tellus, aliquet in maximus ut, tristique vel sapien.
        
        Quisque luctus, elit vitae vestibulum vulputate, nulla dolor dictum nisi, ac dignissim magna purus vitae nisl. Donec lectus sapien, hendrerit sit amet dictum maximus, euismod eget nisi. Pellentesque nec mi sit amet nunc porta rhoncus. Aliquam nec placerat arcu. Cras mi augue, aliquet et maximus ac, tempus quis sapien. Maecenas imperdiet quam ac hendrerit porta. Aliquam malesuada suscipit nisi, et maximus nunc venenatis id. Ut lorem lectus, bibendum id lacinia quis, placerat quis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec condimentum lectus a justo efficitur, vel efficitur neque tempus. Suspendisse pharetra justo metus, et mattis risus tempor consectetur. Maecenas vitae eros vitae metus faucibus bibendum nec vitae elit. Aenean non placerat ante, ac finibus urna. Morbi mi ligula, facilisis vitae dictum sit amet, euismod at enim. Nam sit amet rutrum magna.`
    },
    {
        title: "Fitness Blog 3",
        date: "03/03/2023",
        tags: ["Tag 3-1", "Tag 3-2", "Tag 3-3"],
        author: "Author 3",
        content: `Vestibulum suscipit bibendum nunc a volutpat. Integer pulvinar enim nisi, viverra semper lacus mollis quis. Pellentesque faucibus nisl eu ipsum tincidunt mattis. Nunc facilisis efficitur nisl, ac scelerisque nibh fermentum in. Aliquam ac pharetra lacus. In ut consectetur elit. Etiam dapibus mauris quis risus imperdiet, ac cursus eros hendrerit. Vestibulum arcu mauris, pulvinar sed ultrices at, sodales ac leo. Donec tempus nunc eget orci vestibulum, consectetur pretium nunc elementum. Phasellus id turpis consequat turpis bibendum lobortis eu vitae lectus. Suspendisse potenti. Aenean scelerisque massa orci, eget venenatis urna porttitor non. Nulla consectetur neque ex, a molestie nunc posuere nec.

        Nam quis tortor justo. Proin rhoncus leo vitae elementum elementum. Sed luctus gravida leo, cursus elementum tellus fermentum sed. Vestibulum ornare eleifend ligula, sit amet semper justo mollis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ac nisl nec eros hendrerit dignissim. Sed quis purus sed ante fringilla pulvinar ac nec magna. Etiam consequat eget tellus et suscipit. Donec arcu mi, sodales vitae nulla vel, venenatis fermentum est. Morbi at neque varius tortor eleifend aliquam. Morbi vitae semper sapien. Suspendisse in tellus quis neque mattis sollicitudin nec ut velit.
        
        Sed id cursus lectus. Sed cursus efficitur ultrices. Sed nec nibh lectus. Phasellus et diam ut massa consectetur consectetur eu in sapien. Etiam congue purus vitae orci finibus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi felis nisl, semper sit amet ipsum et, volutpat scelerisque dolor. Suspendisse pulvinar fermentum nibh, ac sodales sem blandit non. Morbi et mi dolor. Pellentesque felis nibh, aliquam nec dapibus vel, suscipit id nulla. Proin condimentum dapibus velit ut rhoncus. Mauris scelerisque nisi nisl, venenatis sollicitudin ex commodo eget. Nulla vehicula rhoncus lectus at tempus. Donec semper convallis dictum. Maecenas viverra scelerisque ante vel rhoncus.
        
        Cras nec lacus viverra, facilisis arcu et, suscipit lectus. Donec erat purus, tincidunt in mauris sed, pretium viverra lacus. Donec tempus ultrices erat, quis finibus nulla sollicitudin a. Nunc est nibh, sollicitudin a ligula ac, vestibulum dictum leo. Etiam varius tortor et placerat volutpat. Phasellus pellentesque, magna at lobortis dapibus, eros diam sollicitudin arcu, sed rutrum purus ligula sed est. Duis laoreet, sapien feugiat dignissim egestas, diam elit hendrerit turpis, vitae mollis lectus arcu eu sem.
        
        Duis massa tortor, euismod ut pulvinar ac, viverra ut risus. Maecenas interdum elit nec consequat rhoncus. Nullam tristique fringilla mauris, at sollicitudin lacus porttitor sed. Cras in quam sed elit feugiat consequat et eget ligula. Aliquam leo urna, tempus in mollis malesuada, malesuada vel est. Aliquam aliquet, leo vitae molestie gravida, risus ligula suscipit quam, id mattis lorem velit at est. Vivamus vulputate urna eu maximus sagittis. Curabitur bibendum malesuada scelerisque. Etiam et lacus ac eros molestie blandit vitae vel risus. Duis ut mauris eget libero blandit vehicula ut et metus. Fusce eu tincidunt nisi. Nam vitae dui condimentum, rhoncus mi id, volutpat urna.`
    }
]

let currentData = 0

function populateBlog(index) {
    document.querySelector("#image").setAttribute("src", `../assets/image/blogs/blog-${index+1}.jpg`)
    document.querySelector("#title").textContent = blogs[index].title
    document.querySelector("#date").textContent = blogs[index].date
    blogs[index].tags.forEach((tag) => {
        const span = document.createElement("span")
        span.textContent = tag
    })
    document.querySelector("#author").textContent = blogs[index].author
    document.querySelector("#content").textContent = blogs[index].content
}


populateBlog(currentData)

let control = document.querySelector("#controls")

control.addEventListener("click", function (event) {
    console.log(event.target.id)

    if(event.target.id == "btn-next"){
        currentData += 1
        currentData > 2 ? currentData = 2 : //Nothing
        populateBlog(currentData)

    }
    else if(event.target.id == "btn-previous"){
        currentData -= 1
        currentData < 0 ? currentData = 2 : //Nothing
        populateBlog(currentData)
    }
    else{
        //Nothing
    }
})