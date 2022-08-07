it(
    'test case no 2 a'
    function(){
        addLineFacilityForm.setTitle("dog");
        addLineFacilityForm.setDescription("bone");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("true");
        addLineFacilityForm.setCors("yes");
        addLineFacilityForm.setCategory("sex");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 b'
    function(){
        addLineFacilityForm.setTitle("bird");
        addLineFacilityForm.setDescription("type of bird");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("false");
        addLineFacilityForm.setCors("yes");
        addLineFacilityForm.setCategory("animal");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 c'
    function(){
        addLineFacilityForm.setTitle("fish");
        addLineFacilityForm.setDescription("type");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("true");
        addLineFacilityForm.setCors("unkown");
        addLineFacilityForm.setCategory("size");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 d'
    function(){
        addLineFacilityForm.setTitle("chicken");
        addLineFacilityForm.setDescription("type");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("true");
        addLineFacilityForm.setCors("no");
        addLineFacilityForm.setCategory("color");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 e'
    function(){
        addLineFacilityForm.setTitle("cow");
        addLineFacilityForm.setDescription("type");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("false");
        addLineFacilityForm.setCors("yes");
        addLineFacilityForm.setCategory("size");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 f'
    function(){
        addLineFacilityForm.setTitle("public holiday");
        addLineFacilityForm.setDescription("world wide holiday");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("true");
        addLineFacilityForm.setCors("unkonwn");
        addLineFacilityForm.setCategory("holiday");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 g'
    function(){
        addLineFacilityForm.setTitle("book");
        addLineFacilityForm.setDescription("fiction");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("false");
        addLineFacilityForm.setCors("no");
        addLineFacilityForm.setCategory("vampire");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 h'
    function(){
        addLineFacilityForm.setTitle("movie");
        addLineFacilityForm.setDescription("movie in 2022");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("true");
        addLineFacilityForm.setCors("yes");
        addLineFacilityForm.setCategory("action");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 i'
    function(){
        addLineFacilityForm.setTitle("football");
        addLineFacilityForm.setDescription("chlesea best club in the world");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("true");
        addLineFacilityForm.setCors("yes");
        addLineFacilityForm.setCategory("sport");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)
it(
    'test case no 2 j'
    function(){
        addLineFacilityForm.setTitle("food");
        addLineFacilityForm.setDescription("best food in town");
        addLineFacilityForm.setAuthor("null");
        addLineFacilityForm.setHTTPS("false");
        addLineFacilityForm.setCors("no");
        addLineFacilityForm.setCategory("indonesian food");
        addLineFacilityForm.getSubmitButton().click();
        addLineFacilityForm.getSuccessAlert();
    }
)