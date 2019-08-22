function On_Load_Score(){
        if(Xrm.Page.getAttribute('new_grade').getValue() != null){
        var grade = Xrm.Page.getAttribute('new_grade').getValue();
        if (grade >= 60){
            if(Xrm.Page.getAttribute('new_status').getValue() != null){
                Xrm.Page.getAttribute('new_status').setValue(false);
            }
        }else{
            if(Xrm.Page.getAttribute('new_status').getValue() != null){
                Xrm.Page.getAttribute('new_status').setValue(true);
            }
        }
    }
}
