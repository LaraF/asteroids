#pragma strict
var direction:int;

var speed:int;
var rotation:int;

function Start () {
direction = Mathf.Round(Random.Range(0.5,2.4));
print(direction);

}

function Update () {


transform.Rotate(Vector3.forward*50*Time.deltaTime);

if ( direction==1)
{

transform.Translate(Vector3.left*10*Time.deltaTime, Space.World);

}
if ( direction==2)
{

transform.Translate(Vector3.right*10*Time.deltaTime, Space.World);

}
var leftmost:float = Camera.main.ScreenToWorldPoint(Vector3(0, 0, 0)).x;
var topmost:float = Camera.main.ScreenToWorldPoint(Vector3(0, 0, 0)).y;
var rightmost:float = Camera.main.ScreenToWorldPoint(Vector3(Screen.width, Screen.height, 0)).x;
var bottommost:float = Camera.main.ScreenToWorldPoint(Vector3(Screen.width, Screen.height, 0)).y;
// .left since the image was originally on the left, if it was pointing up we would have changed it to up
transform.Translate(Vector3.left* speed* Input.GetAxis ("Vertical")* Time.deltaTime);
transform.Rotate(Vector3.back* rotation* Input.GetAxis ("Horizontal")* Time.deltaTime);

if (transform.position.x<leftmost)
{
	Destroy(this.gameObject);
}
if (transform.position.x>rightmost)
{
	Destroy(this.gameObject);;
}
if (transform.position.y<topmost)
{
	Destroy(this.gameObject);
}
if (transform.position.y>bottommost)
{
	Destroy(this.gameObject);
}
}


	
