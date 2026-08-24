<script lang="ts">
    import {enhance} from '$app/forms';
</script>

<form method="POST" action="?/login" use:enhance>
    <label>
        password
        <input name="password" type="password">
    </label>
    <button type="submit">Login</button>
</form>