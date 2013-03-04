#pragma strict
var speed:int;
var rotation: int;
var lives: int;

function Start () 
{
lives=1;

}

function Update () {
var leftmost:float = Camera.main.ScreenToWorldPoint(Vector3(0, 0, 0)).x;
var topmost:float = Camera.main.ScreenToWorldPoint(Vector3(0, 0, 0)).y;
var rightmost:float = Camera.main.ScreenToWorldPoint(Vector3(Screen.width, Screen.height, 0)).x;
var bottommost:float = Camera.main.ScreenToWorldPoint(Vector3(Screen.width, Screen.height, 0)).y;
// .left since the image was originally on the left, if it was pointing up we would have changed it to up
transform.Translate(Vector3.left* speed* Input.GetAxis ("Vertical")* Time.deltaTime);
transform.Rotate(Vector3.back* rotation* Input.GetAxis ("Horizontal")* Time.deltaTime);

if (transform.position.x<leftmost)
{
	transform.position.x=rightmost;
}
if (transform.position.x>rightmost)
{
	transform.position.x=leftmost;
}
if (transform.position.y<topmost)
{
	transform.position.y=bottommost;
}
if (transform.position.y>bottommost)
{
	transform.position.y=topmost;
}

if (lives==0)
{
	Destroy(this.gameObject);
}

}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="TagAsteroid")
	{
		lives--;
	}
	
	Debug.Log(other.gameObject.tag);
}

function OnGUI()
{
	GUI.Label(Rect(5,5,50,25),"Lives: "+lives);
}
