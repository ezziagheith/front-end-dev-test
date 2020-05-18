$('.btn').click(function(){
    let $this = $(this);
    $this.toggleClass('btn');
    if($this.hasClass('btn')){
        $this.text('BUTTON BUTTON');         
    } else {
        $this.text('CLICKED');
    }
});

