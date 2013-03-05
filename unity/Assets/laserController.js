#pragma strict
var laserSpeed:int;
function Start () {

}

function Update () {
transform.Translate(Vector3.left*laserSpeed*Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="TagAsteroid")
	{	
		Destroy(other.gameObject);
		Destroy(this.gameObject);
	}

}