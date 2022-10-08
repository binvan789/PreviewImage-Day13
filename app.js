var upload = document.querySelector('#input')
var preview = document.querySelector('.preview')
upload.addEventListener('change', function(e) {
    var file = upload.files[0]
    if (!file) {
        return
    }
    handle(file)
    if (file.size / (1024 * 1024) > 5) {
        // Code khối lượng file lớn hơn 5mb
    }
    var img = document.createElement('img')
    img.src = URL.createObjectURL(upload.files[0])
    preview.appendChild(img)
})

function handle(file) {
    var fileFormat = file.name.split('.').pop().toLowerCase()
    var checkFormat = ['png','jpeg','gif']
    var isTrueFormat = checkFormat.includes(fileFormat)
    var body = document.querySelector('body')
    if (isTrueFormat == false) {
        var error = document.createElement('span')
        error.setAttribute('class','error','class','hide')
        error.innerText = 'Invalid formatting, try again!'
        body.appendChild(error)
    }
    if (isTrueFormat == true) {
        var success = document.createElement('span')
        success.setAttribute('class','success','class','hide')
        success.innerText = 'Add to success!'
        body.appendChild(success)
    }
}
