public class MyNameController {
    private string myname;
    public MyNameController() {
        myname='Hello Nirmal';
    }

    public String StudentName{
        get{return myname;}
        Set{myname=value;}
    }
}